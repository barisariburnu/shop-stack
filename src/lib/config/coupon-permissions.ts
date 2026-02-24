import type { CouponPermissions } from "@/types/coupon";

export const ADMIN_COUPON_PERMISSIONS: CouponPermissions = {
  canCreate: true,
  canDelete: true,
  canEdit: true,
  canView: true,
  canToggleStatus: true,
};

export const VENDOR_COUPON_PERMISSIONS: CouponPermissions = {
  canCreate: true,
  canDelete: false,
  canEdit: true,
  canView: true,
  canToggleStatus: false,
};
