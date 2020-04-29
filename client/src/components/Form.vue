<template>
	<div class="container mt-5">
		<div class="row">
			<div class="col-md-6 p-5 mt-5">
				<!-- <form class="form-horizontal" method="POST" enctype="multipart/form-data" id="fileUploadForm"> -->
        <div class="form-group">
          <label class="control-label" for="uploadfile">Upload File:</label>
          <div>
            <input @change="changeImg" type="file" class="form-control" id="uploadfile" placeholder="Upload File" name="uploadfile" />
          </div>
        </div>
        <div class="form-group"> 
          <div class="col-sm-offset-2 col-sm-5">
            <button type="submit" class="btn btn-primary" @click="btnSubmit">Upload</button>
          </div>
        </div>
				<!-- </form> -->
				<hr/>
				<div v-for="(list, index) in listFiles" :key="index">{{ list }}</div>
			</div>

			<div class="col-md-6 form p-5">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email <span>(*)</span></label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="fullname">Fullname <span>(*)</span></label>
            <input type="text" class="form-control" id="fullname" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="phone">Phone Number <span>(*)</span></label>
            <input type="tel" class="form-control" id="phone" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Short Cover Letter</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">By signing up to you our Terms and that you have read our <span style="font-weight:bold;">Data Use Palicy</span>, including our <span style="font-weight:bold;">Cookie Use.</span></label>
          </div>
          <button type="submit" style="width: 100%;" class="btn btn-primary mt-4">Submit</button>
        </form>
			</div>

		</div>
	</div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {
data() {
    return {
      listFiles: null,
      targetFile: null
    }
  },
  methods: {
    changeImg(e) {
      this.targetFile = e.target.files[0]
    },
    btnSubmit() {
      if (this.listFiles <= 4) {
        const data = new FormData();
  
        data.append('uploadfile', this.targetFile)
        axios({
          url: 'http://localhost:8000/api/files/upload',
          method: 'post',
          data
        }).then(resp => {
          console.log(resp)
        }).catch((err) => {
          console.log(err)
        })
      } else {
        console.log('sudah penuh')
      }
    }
  }
}

</script>

<style lang="css" scoped>

</style>
