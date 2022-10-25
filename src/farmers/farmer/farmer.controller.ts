import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get, HttpCode,
    Post,
    Query, Req,
    UseInterceptors,
} from '@nestjs/common';
import {FarmerService} from "./farmer.service";
import {UserAuth} from "../../cp/user/user.decorator";
import {User} from "../../cp/enity/user.entity";
import {Request} from "express";
import {farmerOtpDTO } from "../../cp/user/user.dto";
import {OrderDto, ProductDto} from "../entity/productDto";
import {Auth} from "../../guards/auth.decorator";

@Controller('farmer')
@Auth()
@UseInterceptors(ClassSerializerInterceptor)
export class FarmerController {
    constructor(private readonly farmerService: FarmerService) {
    }

    @Get('program_wallets')
    async getFarmerWallets(@UserAuth() user: User) {
        return await this.farmerService.getFarmerWallets();
    }

    @Get('validate')
    async validateFarmer(@UserAuth() user: User, @Query() filters: any) {
        return await this.farmerService.validateFarmer(filters.customerId);
    }

    @Get('card')
    async getFarmerCardNumber(@UserAuth() user: User, @Query() filters: any) {
        return await this.farmerService.getFarmerCardNumber(filters.customerId, filters.walletReferenceCode);
    }

    @Post('products')
    @HttpCode(200)
    async getProducts(@UserAuth() user: User, @Req() req: Request, @Body() payload: ProductDto) {
        return this.farmerService.getFarmerProducts(payload);
    }

    @Post('post_order')
    @HttpCode(200)
    async orderProduct(@UserAuth() user: User, @Req() req: Request, @Body() payload: OrderDto) {
        return this.farmerService.processOrder(payload, user);
    }
    @Post('send_otp')
    @HttpCode(200)
    async SendOtp(@UserAuth() user: User, @Req() req: Request, @Body() payload: farmerOtpDTO) {
        return this.farmerService.sendOtp(payload);
    }
    @Get('transactions')
    @HttpCode(200)
    async findTransaction(@UserAuth() user: User, @Query() filters) {
        return this.farmerService.getTransactions(filters);
    }
}
