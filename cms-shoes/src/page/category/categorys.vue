<template>
  <div>
      <h1 class="h3 mb-2 text-gray-800">Danh mục</h1>


<div class="row">
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-7">
                <div class="card shadow mb-4 mt-2">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-dark">Danh sách danh mục</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Tên danh mục</th>
                                        <th>Ngày tạo</th>
                                        <th>Tùy chọn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Football</td>
                                        <td>2021/01/20</td>
                                        <td>
                                            <div class="btn-option">
                                                <button class="btn btn-dark btn-sm" type="button">
                                                    <i class="fas fa-edit"></i></button>
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
            <div class="col-md-5 mt-2">
                <div class="card">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-dark">Thêm danh mục</h6>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Tên thương hiệu</label>
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
export default {

}
</script>

<style>

</style>