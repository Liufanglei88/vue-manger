<template>
  <div class="table-cell">
    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" header-align='center'>
      <el-table-column type="selection" width="55">
      	  <el-switch
			    v-model="value5"
			    active-color="#13ce66"
			    inactive-color="#ff4949"
			    active-value="100"
			    inactive-value="0">
			  </el-switch>
      </el-table-column>
      <el-table-column label="创意素材">
        <template slot-scope="scope"><img src="../../assets/images/book.png"></template>
      </el-table-column>
      <el-table-column prop="name" label="创意ID">
      </el-table-column>
      <el-table-column prop="address" label="创意类型">
      </el-table-column>
      <el-table-column prop="size" label="尺寸">
      </el-table-column>
      <el-table-column prop="links" label="落地页链接" style='width: 100px!important;' class='column-width'>
      </el-table-column>
      <el-table-column prop="testLink" label="监测链接">
      </el-table-column>
      <el-table-column prop="unit" label="所属单元">
      </el-table-column>
      <el-table-column prop="plan" label="所属计划">
      </el-table-column>
      <el-table-column prop="number" label="曝光量">
      </el-table-column>
      <el-table-column prop="clickNumber" label="点击量">
      </el-table-column>
      <el-table-column prop="pending" label="状态">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
        <!--   <el-button size="mini"><i class=""></i></el-button> -->
          <i class="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
          <i class="el-icon-delete" @click="handleDelete(scope.$index, scope.row)"></i>
          <!-- <el-button size="mini" type="danger" >删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'plan',
  data() {
    return {
    value5: '100',
      tableData3: [{
        date: '图片',
        name: '1111-111',
        address: '图文单',
        size: '100*200',
        links:'http://www.baidu.com',
        testLink:'http://www.color.com',
        unit:'1111',
        plan:'dd-广告测试',
        number:100000,
        clickNumber:100000,
        pending:'投放中'
      }, {
		date: '2016-05-02',
		name: '1111-111',
		address: '图文单',
		size: '100*200',
		links:'http://www.baidu.com',
		testLink:'http://www.color.com',
		unit:'1111',
		plan:'dd-广告测试',
		 number:100000,
        clickNumber:100000,
        pending:'投放中'
      }],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}

</script>
<style scoped lang="scss">
.cell {
  img {
    width: 80px!important;
    height: 80px;
  }
}
.column-width{
	width: 100px!important;
	display: -webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
	overflow: hidden;
}
</style>
