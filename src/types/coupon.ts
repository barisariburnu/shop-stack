export type {
  CouponFormValues,
  CouponItem as Coupon,
  CouponPermissions,
} from "@/types/coupons";

export interface AppliedCoupon {
  shopId: string;
  code: string;
  discountAmount: number;
}
