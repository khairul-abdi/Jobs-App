<template>
  <div class="container">
    <div class="row">
      <div class="col-2" style="background-color:#495A50; height: 100vh;">
        <div class="text-align d-flex">
          <div class="ml-3">
            <i class="fas fa-user fa-2x circle-icon"></i>
          </div>
          <div class="mt-4 ml-2">
            <p style="color:white; font-size: 14px;">Testing User <span>Admin</span></p>
          </div>
        </div>
        <div class="app">
          <p>Applications</p>
        </div>
      </div>
      <div class="col-10 mt-5 pl-5">
        <div>
          <nav class="navbar navbar-light">
            <a class="navbar-brand" style="font-weight: bold; font-size:26px;">Aplication Data</a>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
        </div>
        <hr>

        <div class="float-right">
            <div>
              <p>Viewing 
                  <span style="font-weight: bold;">1-10</span>
                of 
                  <span style="font-weight: bold;">20</span>
                  <span class="box">1</span>
                  <span class="box"><</span>
                  <span class="box">></span>
              </p>
            </div>
        </div>

        <div class="">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Apply Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="list in listData" :key="list.id">
                <th scope="row">{{ list.email }}</th>
                <td>{{ list.fullname }}</td>
                <td>{{ list.phone }}</td>
                <td>{{ moment(list.createdAt).format('DD/MM/YYYY') }}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'
import router from '../router'
import EventBus from './EventBus'
import jwtDecode from 'jwt-decode'

Vue.prototype.moment = moment

export default {  
  data() {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      username: decoded.username,
      password: decoded.password,
      listData: []
    }
  },
  mounted(){
    axios({
      url: 'http://localhost:8000/api/form/all',
      method: 'get',
    }).then(resp => {
      this.listData = resp.data
      console.log(resp.data)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="css" scoped>
.dashboard {
  text-align: center;
}

.box {
  width: 10px;
  height: 8px;
  padding: 10px;
  border: 1px solid gray;
  margin: 0;
}

.app {
  padding: auto;
  margin-top: 150px;
  background-color: #85A392 !important;
}

.app p {
  padding: 10px;
  font-weight: bold;
  text-align: center;
}

.app:hover {
  cursor: pointer;
}

.circle-icon {
  margin-top: 20px;
  box-sizing: border-box;
  padding: 7px;
  width: 40px;
  height: 40px;
  background: #FFECC7;
  border-radius: 50%;
}
</style>