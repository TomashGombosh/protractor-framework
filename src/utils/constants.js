import { config } from 'dotenv';

export const getUserName = () => {
    config();
    return process.env.USERNAME;
};

export const getPassword = () => {
    config();
    return process.env.PASSWORD;
};

export const getTimeout = () => {
    config();
    return process.env.TIMEOUT;
};
