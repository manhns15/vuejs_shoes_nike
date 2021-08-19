<template>
  <div>
    <div class="card shadow mb-4 mt-3">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-dark">Danh sách đơn hàng</h6>
      </div>

      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Tên khách hàng</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th>Tùy chọn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NS8292929</td>
                <td>Nguyen Sy Manh</td>
                <td>manhns@gmail.com</td>
                <td>03344934393</td>
                <td>Thanh Hóa</td>
                <td>Đang chờ</td>

                <td>2021/03/12</td>
                <td>
                  <div class="btn-option d-flex">
                    <button class="btn btn-dark btn-sm" type="button">
                      <i class="fas fa-edit"></i>
                    </button>
                    &nbsp;
                    <button class="btn btn-danger btn-sm" type="button">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
