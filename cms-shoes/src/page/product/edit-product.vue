<template>
  <div>
    <h1 class="h3 mb-2 text-gray-800">Thêm sản phẩm</h1>
    <div class="row">
      <div class="col-md-12">
        <form action="">
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-body">
                  <!-- Form -->

                  <div class="form-group">
                    <label for="exampleInputEmail1">Tên sản phẩm</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="row">
                    <label class="col-sm-4 col-lg-2 col-form-label"
                      >Hình ảnh</label
                    >
                    <div class="col-md-3">
                      <img
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fc5e4df5-355a-49f2-b797-33591b686b64/air-max-viva-shoe-31Zblk.png"
                        class="img-responsive"
                        width="100"
                      />
                    </div>
                    <div class="col-md-6">
                      <div class="card row">
                        <div class="card-body">
                          <div class="mb-2">
                            <div>
                              <div class="form-group mb-2 mr-sm-2 mb-sm-0">
                                <div class="upload-btn-wrapper">
                                  <input
                                    id="uploadimg"
                                    type="file"
                                    name="myfile"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Giá</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Giá khuyến mại</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Mô tả</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="mb-20">
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <form action="">
                          <label for="exampleInputEmail1">Size</label>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              S
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              M
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              L
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              XL
                            </label>
                          </div>
                        </form>
                      </div>

                      <div class="form-group col-md-6">
                        <form action="">
                          <label for="exampleInputEmail1">Màu sắc</label>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              Vàng
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              Xám
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              Đen
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              Xanh
                            </label>
                          </div>
                        </form>
                      </div>
                    </div>
                    
                    <div class="form-group" style="padding-top: 15px;">
                      <label for="exampleInputEmail1">Trạng thái</label>
                      <div class="col p-1">
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider round"></span>
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">Thương hiệu</label>
                      <select
                        class="form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Lựa chọn thương hiệu</option>
                        <option value="1">Football</option>
                        <option value="2">Basketball</option>
                        <option value="2">Fashion</option>
                        <option value="2">Running</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group" style="padding-top: 20px;">
            <button type="submit" class="btn btn-primary btn-sm">Lưu</button
            >&nbsp;
            <button type="submit" class="btn btn-danger btn-sm">Hủy</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
