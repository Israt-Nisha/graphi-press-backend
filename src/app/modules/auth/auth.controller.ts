import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { tokenUtils } from "../../utils/token";

const registerCustomer = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body;

        const result = await AuthService.registerCustomer(payload);
        const { accessToken, refreshToken, token, ...rest } = result

        tokenUtils.setAccessTokenCookie(res, accessToken);
        tokenUtils.setRefreshTokenCookie(res, refreshToken);
        tokenUtils.setBetterAuthSessionCookie(res, token as string);

        sendResponse(res, {
            httpStatusCode: 201,
            success: true,
            message: "Customer registered successfully",
            data: {
                token,
                accessToken,
                refreshToken,
                ...rest,

            },
        })
    }
)

const loginUser = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body;
        const result = await AuthService.loginUser(payload);

        const { accessToken, refreshToken, token, ...rest } = result

        tokenUtils.setAccessTokenCookie(res, accessToken);
        tokenUtils.setRefreshTokenCookie(res, refreshToken);
        tokenUtils.setBetterAuthSessionCookie(res, token);

        sendResponse(res, {
            httpStatusCode: 200,
            success: true,
            message: "User logged in successfully",
            data: {
                token,
                accessToken,
                refreshToken,
                ...rest,

            },
        })
    }
)

export const AuthController = {
    registerCustomer,
    loginUser,
};