import type { Schema, Struct } from '@strapi/strapi';

export interface CartCartItem extends Struct.ComponentSchema {
  collectionName: 'components_cart_cart_items';
  info: {
    description: 'Product items in a shopping cart';
    displayName: 'Cart Item';
  };
  attributes: {
    addedAt: Schema.Attribute.DateTime;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantity: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    selectedOptions: Schema.Attribute.JSON;
  };
}

export interface OrderAddress extends Struct.ComponentSchema {
  collectionName: 'components_order_addresses';
  info: {
    description: 'Shipping and billing addresses for orders';
    displayName: 'Address';
  };
  attributes: {
    addressLine1: Schema.Attribute.String & Schema.Attribute.Required;
    addressLine2: Schema.Attribute.String;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    fullName: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    postalCode: Schema.Attribute.String & Schema.Attribute.Required;
    state: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OrderOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_order_order_items';
  info: {
    description: 'Product items in an order';
    displayName: 'Order Item';
  };
  attributes: {
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantity: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    selectedOptions: Schema.Attribute.JSON;
  };
}

export interface ProductSpecification extends Struct.ComponentSchema {
  collectionName: 'components_product_specifications';
  info: {
    description: 'Product specifications as key-value pairs';
    displayName: 'Specification';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StylesSizeStyle extends Struct.ComponentSchema {
  collectionName: 'components_styles_size_styles';
  info: {
    description: 'Styling dimensions for categories and products';
    displayName: 'Size Style';
  };
  attributes: {
    height: Schema.Attribute.String;
    width: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cart.cart-item': CartCartItem;
      'order.address': OrderAddress;
      'order.order-item': OrderOrderItem;
      'product.specification': ProductSpecification;
      'styles.size-style': StylesSizeStyle;
    }
  }
}
