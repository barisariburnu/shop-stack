import { type NeonQueryFunction, neon } from "@neondatabase/serverless";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import {
  customerAddresses,
  customerAddressesRelations,
} from "@/lib/db/schema/address-schema";
import {
  attributes,
  attributesRelations,
  attributeValues,
  attributeValuesRelations,
} from "@/lib/db/schema/attribute-schema";
import { user } from "@/lib/db/schema/auth-schema";
import { brands } from "@/lib/db/schema/brand-schema";
import {
  cartItems,
  cartItemsRelations,
  cartSessions,
  cartSessionsRelations,
} from "@/lib/db/schema/cart-schema";
import { categories } from "@/lib/db/schema/category-schema";
import {
  couponCategories,
  couponCategoriesRelations,
  couponProducts,
  couponProductsRelations,
  coupons,
  couponsRelations,
  couponUsage,
  couponUsageRelations,
} from "@/lib/db/schema/coupon-schema";
import {
  emailDeliveries,
  emailDeliveriesRelations,
} from "@/lib/db/schema/email-schema";
import {
  notifications,
  notificationsRelations,
} from "@/lib/db/schema/notification-schema";
import {
  orderItems,
  orderItemsRelations,
  orders,
  ordersRelations,
  payments,
  paymentsRelations,
} from "@/lib/db/schema/order-schema";
import {
  productAttributes,
  productAttributesRelations,
  productImages,
  productImagesRelations,
  productShippingMethods,
  productShippingMethodsRelations,
  products,
  productsRelations,
  productTags,
  productTagsRelations,
} from "@/lib/db/schema/products-schema";
import {
  productReviews,
  productReviewsRelations,
  reviewHelpfulVotes,
  reviewHelpfulVotesRelations,
} from "@/lib/db/schema/review-schema";
import {
  shippingMethods,
  shippingMethodsRelations,
} from "@/lib/db/schema/shipping-schema";
import {
  shops,
  shopsRelations,
  vendors,
  vendorsRelations,
} from "@/lib/db/schema/shop-schema";
import { tags, tagsRelations } from "@/lib/db/schema/tags-schema";
import { taxRates, taxRatesRelations } from "@/lib/db/schema/tax-schema";
import {
  wishlistItems,
  wishlistItemsRelations,
} from "@/lib/db/schema/wishlist-schema";

const schema = {
  user,
  vendors,
  vendorsRelations,
  shops,
  shopsRelations,
  categories,
  brands,
  attributes,
  attributeValues,
  attributesRelations,
  attributeValuesRelations,
  tags,
  tagsRelations,
  taxRates,
  taxRatesRelations,
  productAttributes,
  productAttributesRelations,
  productImages,
  productImagesRelations,
  products,
  productsRelations,
  productTags,
  productTagsRelations,
  coupons,
  couponProducts,
  couponCategories,
  couponUsage,
  couponsRelations,
  couponProductsRelations,
  couponCategoriesRelations,
  couponUsageRelations,
  cartSessions,
  cartItems,
  cartItemsRelations,
  cartSessionsRelations,
  customerAddresses,
  customerAddressesRelations,
  wishlistItems,
  wishlistItemsRelations,
  shippingMethods,
  shippingMethodsRelations,
  productShippingMethods,
  productShippingMethodsRelations,
  orderItems,
  orderItemsRelations,
  orders,
  ordersRelations,
  payments,
  paymentsRelations,
  notifications,
  notificationsRelations,
  emailDeliveries,
  emailDeliveriesRelations,
  productReviews,
  productReviewsRelations,
  reviewHelpfulVotes,
  reviewHelpfulVotesRelations,
};

// Lazy initialization - only connect to DB when first accessed on server
let sqlClient: NeonQueryFunction<false, false> | null = null;
let dbClient: NeonHttpDatabase<typeof schema> | null = null;

function getSql() {
  if (!sqlClient) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error(
        "DATABASE_URL environment variable is not set. Please check your .env file.",
      );
    }
    sqlClient = neon(url);
  }
  return sqlClient;
}

function getDb() {
  if (!dbClient) {
    dbClient = drizzle({
      client: getSql(),
      schema,
    });
  }
  return dbClient;
}

// Export getters that lazily initialize
export const sql = new Proxy({} as NeonQueryFunction<false, false>, {
  get(_, prop) {
    return Reflect.get(getSql(), prop);
  },
  apply(_, thisArg, args) {
    return Reflect.apply(getSql(), thisArg, args);
  },
});

export const db = new Proxy({} as NeonHttpDatabase<typeof schema>, {
  get(_, prop) {
    return Reflect.get(getDb(), prop);
  },
});
