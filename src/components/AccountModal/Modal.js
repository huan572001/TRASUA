import swal from "sweetalert";
import Swal from "sweetalert2";

export const informSucess = (handal, text) => {
  swal({
    title: "Thực hiện thành công",
    text: text ? text : `Thành công`,
    icon: "success",
    // dangerMode: true,
    buttons: "Đồng ý",
  }).then((yes) => {
    if (yes) {
      // handal();
    }
  });
};
export const loginError = (value, handal, text) => {
  swal({
    title: value ? value : "Tên đăng nhập hoặc mật khẩu không khớp !",
    text: text ? text : `Mời bạn đăng nhập lại.`,
    icon: "warning",
    // dangerMode: true,
    buttons: "Đồng ý",
  }).then((yes) => {
    if (yes) {
      // handal();
    }
  });
};

export const informError = (error) => {
  swal({
    title: "Thực hiện thất bại",
    text: error ? error : "Thất bại",
    icon: "error",
    // dangerMode: true,
    buttons: "Đồng ý",
  });
};
export const errorPayment = (error) => {
  swal({
    title: "giỏ hàng trống!",
    text: error ? error : "Thất bại",
    icon: "error",
    // dangerMode: true,
    buttons: "Đồng ý",
  });
};
export const showDeleteUserModal = (onAccept) => {
  swal({
    title: "Bạn muốn xóa tài khoản này không",
    icon: "warning",
    // dangerMode: true,
    buttons: ["Hủy", "Đồng Ý"],
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};

export const showLockUserModal = (action, onAccept) => {
  swal({
    title: action
      ? `Bạn có muốn khóa tài khoản này không?`
      : "Bạn có muốn mở tài khoản này không?",
    text: action
      ? `Khi khóa tài khoản tài khoản này sẽ không thể sử dụng được nữa`
      : "Khi mở tài khoản tài khoản này sẽ có thể sử dụng lại",
    icon: "warning",
    // dangerMode: true,
    buttons: ["Hủy", "Đồng Ý"],
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};
export const showLockOrderModal = (action, onAccept) => {
  swal({
    title: action
      ? `Bạn có muốn hủy hóa đơn này không?`
      : "Bạn có muốn hoàn tác hóa đơn này không?",
    icon: "warning",
    // dangerMode: true,
    buttons: ["Hủy", "Đồng Ý"],
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};
export const showLockProductModal = (action, onAccept) => {
  swal({
    title: action
      ? `Bạn có muốn khóa sản phẩm này không?`
      : "Bạn có muốn mở khóa sản phẩm này không?",
    icon: "warning",
    // dangerMode: true,
    buttons: ["Hủy", "Đồng Ý"],
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};
export const showApproveModal = (action, onAccept) => {
  swal({
    title: action
      ? `Bạn có muốn người này trở thành Mentor?`
      : "Bạn có chắc chắn muốn từ chối yêu cầu trở thành Mentor của người dùng này?",
    text: action ? `` : "",
    icon: "warning",
    // dangerMode: true,
    buttons: ["Hủy", "Đồng Ý"],
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};

export const showConfirmSuccess = (onAccept) => {
  swal({
    title: "Thực hiện thành công",
    text: `Thành công`,
    icon: "success",
    // dangerMode: true,
    buttons: "Đồng ý",
  });
};
export const showConfirmError = () => {
  swal({
    title: "Thực hiện thất bại sản phẩm đã được mua",
    text: `Thất bại`,
    icon: "error",
    // dangerMode: true,
    buttons: "Đồng ý",
  });
};
export const showError = (value) => {
  swal({
    title: value ? value : "Thực hiện thất bại",
    text: `Thất bại`,
    icon: "error",
    // dangerMode: true,
    buttons: "Đồng ý",
  });
};
export const showSuccess = (value) => {
  swal({
    title: value ? value : "Thực hiện Thành công",
    text: `Thành công`,
    icon: "success",
    // dangerMode: true,
    buttons: "Đồng ý",
  });
};
export const Warning = (value, text, onAccept) => {
  swal({
    title: value ? value : "Cảnh báo!",
    text: text ? text : `Cảnh báo!`,
    icon: "warning",
    // dangerMode: true,
    buttons: "Đồng ý",
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};
export const showWarning = (value, onAccept) => {
  swal({
    title: value ? value : "Bạn có chắc muốn thực hiện hành động này chứ?",
    text: `Sau khi thực hiện bạn sẽ không thể khôi phục!`,
    icon: "warning",
    // dangerMode: true,
    buttons: "Đồng ý",
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};
export const showDeleteBanner = (onAccept) => {
  swal({
    title: `Bạn có muốn xóa banner này?`,
    text: `Khi xóa ${name} không thể khôi phục bạn có muốn tiếp tục?`,
    icon: "warning",
    // dangerMode: true,
    buttons: ["Hủy", "Đồng Ý"],
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};
export const showDelete = (name, onAccept) => {
  swal({
    title: `${name ? name : "Bạn có muốn xóa ?"}`,
    text: `Khi xóa bạn không thể khôi phục bạn có muốn tiếp tục?`,
    icon: "warning",
    // dangerMode: true,
    buttons: ["Hủy", "Đồng Ý"],
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};
export const showUpdateUserEditSuccess = (setSubmitting) => {
  Swal.fire({
    heightAuto: false,
    title:
      '<div class="block w-100% h-3 bg-[#224922] rounded-t-lg mb-6"></div><p class="font-bold text-3xl text-[#224922] !mb-5">Thành công!</p>',
    focusConfirm: false,
    showCloseButton: true,
    confirmButtonText: "Đóng",
    html: '<p class="text-base">Lưu thông tin thành công</p>',
    customClass: {
      popup: "!rounded-lg",
      title: "!pt-0 !px-0",
      confirmButton: "bg-white h-11 w-[152px] !border-[#224922] rounded-lg",
      htmlContainer: "!mt-0 !h-[136px]",
      closeButton: "!text-[#101828] !focus:outline-0",
    },
    buttonsStyling: false,
  }).then((result) => {
    if (result.isConfirmed) {
      if (setSubmitting) {
        setSubmitting(false);
      }
    }
  });
};

export const showUpdateUserEditFail = () => {
  Swal.fire({
    heightAuto: false,
    title:
      '<div class="block w-100% h-3 bg-[#DC2626] rounded-t-lg mb-6"></div><p class="font-bold text-3xl text-[#DC2626] !mb-5">Thất bại</p>',
    focusConfirm: false,
    showCloseButton: true,
    confirmButtonText: "Đóng",
    html: '<p class="text-base">Lưu thông tin không thành công</p><p class="text-base">Vui lòng thử lại hoặc kiểm tra đường truyền</p>',
    customClass: {
      popup: "!rounded-lg",
      title: "!pt-0 !px-0",
      confirmButton: "bg-white h-11 w-[152px] !border-[#224922] rounded-lg",
      htmlContainer: "!mt-0 !h-[136px]",
      closeButton: "!text-[#101828] !focus:outline-0",
    },
    buttonsStyling: false,
  });
};

export const showdeleteUserEditConfirm = (onAccept) => {
  Swal.fire({
    heightAuto: false,
    title:
      '<div class="block w-100% h-3 bg-[#DC2626] rounded-t-lg mb-6"></div><p class="font-bold text-3xl text-[#DC2626] !mb-5">Xóa thông tin</p>',
    focusConfirm: true,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: "Xoá",
    html: '<p class="text-base">Bạn có chắc muốn xóa thông tin này?</p><p class="text-base text-[#DC2626]">Nếu bạn xóa thông tin này sẽ biến mất vĩnh viễn và không thể khôi phục lại.</p>',
    customClass: {
      popup: "!rounded-lg",
      title: "!pt-0 !px-0",
      confirmButton:
        "bg-[#DC2626] !border-none h-11 w-[152px] rounded-lg text-white",
      htmlContainer: "!mt-0 !h-[136px]",
      closeButton: "!text-[#101828] !focus:outline-0",
      cancelButton:
        "bg-white !border-[#224922] h-11 w-[152px] rounded-lg text-[#224922] border",
      actions: "!justify-between !w-full !px-6",
    },
    buttonsStyling: false,
  }).then((result) => {
    if (result.isConfirmed) {
      onAccept();
    }
  });
};

export const showDeleteUserEditSuccess = () => {
  Swal.fire({
    heightAuto: false,
    title:
      '<div class="block w-100% h-3 bg-[#224922] rounded-t-lg mb-6"></div><p class="font-bold text-3xl text-[#224922] !mb-5">Thành công!</p>',
    focusConfirm: false,
    showCloseButton: true,
    confirmButtonText: "Đóng",
    html: '<p class="text-base">Xóa thông tin thành công</p>',
    customClass: {
      popup: "!rounded-lg",
      title: "!pt-0 !px-0",
      confirmButton: "bg-white h-11 w-[152px] !border-[#224922] rounded-lg",
      htmlContainer: "!mt-0 !h-[136px]",
      closeButton: "!text-[#101828] !focus:outline-0",
    },
    buttonsStyling: false,
  });
};

export const showDeleteUserEditFail = () => {
  Swal.fire({
    heightAuto: false,
    title:
      '<div class="block w-100% h-3 bg-[#DC2626] rounded-t-lg mb-6"></div><p class="font-bold text-3xl text-[#DC2626] !mb-5">Thất bại</p>',
    focusConfirm: false,
    showCloseButton: true,
    confirmButtonText: "Đóng",
    html: '<p class="text-base">Xóa thông tin không thành công</p><p class="text-base">Vui lòng thử lại hoặc kiểm tra đường truyền</p>',
    customClass: {
      popup: "!rounded-lg",
      title: "!pt-0 !px-0",
      confirmButton: "bg-white h-11 w-[152px] !border-[#224922] rounded-lg",
      htmlContainer: "!mt-0 !h-[136px]",
      closeButton: "!text-[#101828] !focus:outline-0",
    },
    buttonsStyling: false,
  });
};
export const showDeleteOderModal = (onAccept) => {
  swal({
    title: "Bạn có muốn chắc chắn huy đơn hàng này không",
    icon: "warning",
    // dangerMode: true,
    buttons: ["Hủy", "Đồng Ý"],
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};
export const showSuccessOderModal = (onAccept) => {
  swal({
    title: "Bạn có muốn chắc chắn nhận đơn hàng này không",
    icon: "warning",
    // dangerMode: true,
    buttons: ["Hủy", "Đồng Ý"],
  }).then((yes) => {
    if (yes) {
      onAccept();
    }
  });
};
