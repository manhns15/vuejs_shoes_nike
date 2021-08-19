<template>
  <div>
    <h1 class="h3 mb-2 text-gray-800">Khách hàng</h1>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-8">
            <div class="card shadow mb-4 mt-3">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-dark">
                  Danh sách khách hàng
                </h6>
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
                        <th>Tên tài khoản</th>
                        <th>Tên khách hàng</th>
                        <th>Email</th>
                        <th>Ngày tạo</th>
                        <th>Tùy chọn</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>manhns15</td>
                        <td>Nguyen Sy Manh</td>
                        <td>manhns15@gmail.com</td>
                        <td>2021/01/20</td>
                        <td>
                          <div class="btn-option d-flex">
                            <a routerLink="/edit-customer">
                              <button class="btn btn-dark btn-sm" type="button">
                                <i class="fas fa-edit"></i>
                              </button>
                            </a>
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
          <div class="col-md-4">
             <div class="card mt-3 mb-3">
                    <div class="card-header">
                        <h6 class="font-weight-bold text-dark">Tài khoản</h6>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Tên tài khoản</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Tên khách hàng</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Mật khẩu</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group" style="padding-top: 20px;">
                            <button type="submit" class="btn btn-primary btn-sm">Lưu</button>&nbsp;
                            <button type="submit" class="btn btn-danger btn-sm">Hủy</button>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
