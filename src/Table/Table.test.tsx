import { render, screen, waitFor } from "@testing-library/react";
import { getData } from "../api";
import EmployeesTable from "./Table";

const MOCK_USERS = [
  {
    id: "1",
    name: "Mike Potts",
    jobTitle: "CEO",
    tenure: "5",
    gender: "Male",
  },
  {
    id: "2",
    name: "Tom Connor",
    jobTitle: "Developer",
    tenure: "2",
    gender: "Male",
  },
];

const mockFn = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_USERS),
  })
);

describe("Test Table component", () => {
  mockFn.mockClear();

  let users: string | any[];
  describe("Getting users", () => {
    beforeEach(async () => {
      users = await getData();
    });

    test("should find testid Table", async () => {
      render(<EmployeesTable data={users} />);
      await waitFor(() => expect(screen.getByTestId("table")));
    });
    test("should find users by id=user-item", async () => {
      render(<EmployeesTable data={users} />);
      await waitFor(() => expect(screen.findAllByTestId('user-item')));
    });
    test("should correct length users array", async () => {
      render(<EmployeesTable data={users} />);
      await waitFor(() => expect(MOCK_USERS.length).toBe(2));
    });
  });
});
