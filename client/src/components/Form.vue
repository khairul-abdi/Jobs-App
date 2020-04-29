<template>
	<div class="container mt-5">
		<div class="row">
			<div class="col-md-6 p-5 mt-5">
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
				<hr/>
				<div v-for="(list, index) in listFiles" :key="index">{{ list }}</div>
			</div>

			<div class="col-md-6 form p-5">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email <span>(*)</span></label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
          </div>
          <div class="form-group">
            <label for="fullname">Fullname <span>(*)</span></label>
            <input type="text" class="form-control" id="fullname" v-model="fullname">
          </div>
          <div class="form-group">
            <label for="phone">Phone Number <span>(*)</span></label>
            <input type="tel" class="form-control" id="phone" v-model="phone">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Short Cover Letter</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" v-model="letter" rows="3"></textarea>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">By signing up to you our Terms and that you have read our <span style="font-weight:bold;">Data Use Palicy</span>, including our <span style="font-weight:bold;">Cookie Use.</span></label>
          </div>
          <button type="submit" style="width: 100%;" class="btn mt-4 apply" @click="apply">Apply for this job</button>
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
      targetFile: null,
      email: '',
      fullname: '',
      phone: '',
      letter: ''
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
    },
    apply() {
      axios.post('http://localhost:8000/api/form/init',
      {
        email: this.email,
        fullname: this.fullname,
        phone: this.phone,
        letter: this.letter
      }).then(resp => {
        console.log(resp)
        this.email = '',
        this.fullname = '',
        this.phone = '',
        this.letter = ''
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}

</script>

<style lang="css" scoped>
.col-md-6.form {
  background-color:#495A50;
  color: white;
}

.form-group span {
  color: #F5B971 !important;
}

.apply {
  border: none;
  height: 50px;
  color: white;
  padding: 15px auto;
  background-color: #F5B971;
}
</style>
