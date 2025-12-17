import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct() {
    return { message: 'Product created successfully' };
  }
  @Get()
  findAllProducts() {
    return { message: 'List of all products' };
  }

  @Get(':id')
  findProductById(@Param('id') id: string) {
    return { message: `Product details for ID: ${id}` };
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: any) {
    return { message: `Product with ID: ${id} updated successfully` };
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return { message: `Product with ID: ${id} deleted successfully` };
  }
}
