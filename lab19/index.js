// Khi sử dụng các component chung
// Cấu trúc (HTMl)

/**
 * Arcordion wrapper
 *      Items
 *          Header
 *              Button
 *          Collapse
 *              Body
 *
 *
 * 2. Class (liên quan đến CSS) không thay đổi đc
 * 3.ID và các thuộc tính tùy chỉnh (data-*), ví dụ: data-bs-toggle,.... -> có thể thay đổi nhưng thay đổi đồng bộ
 * 4. Bên trong các phần nội dung thì có thể tùy ý sử dụng các phần tử, bootstrap class. layout, ....
 *
 */

/**
 * .carousel | class cross-fade | data-bs-ride
 * .carousel indicators | data-bs-target | data-bs-slide-to
 * .carousel inner
 * .carousel-item | data-bs-interval
 * .carousel-caption
 * .carousel-control-prev | data-bs-target | data-bs-slide
 * .carousel-control-next | data-bs-target | data-bs-slide
 */

/**
 * data-target | data-bs-toggle="modal"
 *
 * .modal | data-bs-backdrop | data-bs-keyboard
 *      .modal-dialog | .modal-dialog-scrollable
 *       .modal-content
 *           .modal-header
 *               .modal-title
 *               .btn-close | data-bs-dismiss
 *           .modal-body
 *           .modal-footer
 *               .btn
 *
 */

/**
 * .navbar, .navabar-expand-*
 *         .container-*
 *              .navbar-brand
 *                  .navbar-toggle | data-bs-toggle | data-bs-target (content)
 *                  .navbar-collapse, . collapse, id (data-bs-target )
 *                  .navbar-nav
 */

/**
 *  Form validation
 * - Validate mặc định của trình duyệt ( sử dụng các thuộc tính required, min, max...)
 * - Sử dụng API checkValidality()- novalidate và need-validate (form)
 * - Sử dụng các class .is-valid và is-invalid
 */