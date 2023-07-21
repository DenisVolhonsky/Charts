import React, { PropsWithChildren } from "react";
import { Container } from '@mui/material';

const ChartsWrapper: React.FC<PropsWithChildren> = ({ children }) => (
    <Container className="ChartsWrapper">
        {children}
    </Container>
)

export default ChartsWrapper