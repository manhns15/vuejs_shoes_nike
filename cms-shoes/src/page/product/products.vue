<template>
  <div>
      <h1 class="h3 mb-2 text-gray-800">Sản phẩm</h1>
<router-link to="add-product"><button class="btn btn-dark">Thêm sản phẩm</button></router-link>
<div class="card shadow mb-4" style="margin-top: 15px;">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight text-dark">Danh sách sản phẩm</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Ảnh</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
                        <th>Ngày tạo</th>
                        <th>Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nike Air For 1</td>
                        <td><img src="/img/product/n-2.png" width="80" alt=""></td>
                        <td>1.000.000 vnđ</td>
                        <td>Còn hàng</td>
                        <td>05/04/2021</td>
                        <td>
                            <div class="btn-option">
                                <router-link to="/edit-product">
                                    <button class="btn btn-dark btn-sm" type="button">
                                        <i class="fas fa-edit"></i></button>
                                </router-link>
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
export default {

}
</script>

<style>

</style>