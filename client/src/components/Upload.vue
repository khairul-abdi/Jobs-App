<template>
  <div class="col-md-6 mt-5 p-5">
      <form class="form-horizontal" method="POST" enctype="multipart/form-data" id="fileUploadForm">
        <div class="form-group">
          <label class="control-label" for="uploadfile">Upload File:</label>
          <div>
            <input type="file" class="form-control" id="uploadfile" placeholder="Upload File"  name="uploadfile" />
          </div>
        </div>
        <div class="form-group"> 
          <div class="col-sm-offset-2 col-sm-5">
            <button type="submit" class="btn btn-primary" id="btnSubmit">Upload</button>
          </div>
        </div>
      </form>
      <hr/>
      <div class="col-sm-offset-2" id="listFiles"></div>
    </div>
</template>