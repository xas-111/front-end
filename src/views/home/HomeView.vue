<template>
  <div>
    <!-- Title -->
    <el-container style="height: 700px; border: 1px solid #eee">
      <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)"
        >学生管理系统</el-header
      >
      <!-- Side -->
      <el-container>
        <el-aside width="230px" style="border: 1px solid #eee"
          >
            <el-menu :default-openeds="['1', '3']">
              <el-submenu index="1">
                <template slot="title"
                  ><i class="el-icon-message"></i>系统信息管理</template
                >
                <el-menu-item index="1-1">学生管理</el-menu-item>

              </el-submenu>
            </el-menu>
          </el-aside
        >
        <!-- main -->
        <el-main>
          <!-- search form -->
          <el-form :inline="true" :model="searchForm" class="demo-form-inline">
            <el-form-item label="姓名">
              <el-input v-model="searchForm.name" placeholder="姓名"></el-input>
            </el-form-item>

            <el-form-item label="性别">
              <el-select v-model="searchForm.gender" placeholder="性别">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
            </el-form-item>


            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>

          <!-- Data presentation -->
          <el-table :data="tableData" border>
            <el-table-column prop="name" label="姓名" width="204">
            </el-table-column>
            <el-table-column label="性别" width="140">
              <template slot-scope="scope">
                {{scope.row.gender == 1 ? '男':'女'}}
              </template>
            </el-table-column>
            <el-table-column prop="name" label="剩余课次" width="210">
            </el-table-column>
            <el-table-column prop="name" label="剩余金额" width="210">
            </el-table-column>
            <el-table-column prop="operation" label="操作" width="210">
              <el-button type="primary" size="mini">编辑</el-button>
              <el-button type="danger" size="mini">删除</el-button>
            </el-table-column>
          </el-table>

          <br />

          <el-pagination
            background
            layout="total,sizes,prev, pager, next,jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :total="1000"
          >
          </el-pagination>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
      searchForm: {
        name: "",
        gender: "",
        entrydate: [],
      },
    };
  },

  methods: {
    handleSizeChange() {
      alert("size change handled");
    },
    handleCurrentChange() {
      alert("current change handled");
    },
    onSubmit() {
      alert("I am searching");
    },
  },

  mounted() {
    axios
      .get("http://yapi.smart-xwork.cn/mock/169327/emp/list")
      .then((result) => {
        this.tableData = result.data.data;
      });
  },
};
</script>

<style>
</style>