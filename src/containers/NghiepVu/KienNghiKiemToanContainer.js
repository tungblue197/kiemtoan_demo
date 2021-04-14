import React, { Component } from "react";
import AppControl from "../../components/app-control/AppControl";
import KienNghiKiemToanService from '../../services/NghiepVu/KienNghKiemToanService';
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  MasterDetail,
  Pager,
  Paging,
  Popup,
  SearchPanel,
} from "devextreme-react/data-grid";
import Tabs from "../../components/tabs/Tabs";
import data from "../../data/data";
import Confirm from "../../components/comfirm/Confirm";

export default class KienNghiKiemToanContainer extends Component {
  constructor(props) {
    super(props);
    this.gridRef = null;
    this.state = {
      dataSource: data.kienNghiList,
      columnsOptions: [
        {
          dataField: "MaKienNghi",
          caption: "Mã kiến nghị",
        },
        {
          dataField: "TenKienNghi",
          caption: "Tên kiến nghị",
        },
        {
          dataField: "NgayHieuLuc",
          caption: "Ngày hiệu lực",
        },
        {
          dataField: "NgayHetHieuLuc",
          caption: "Ngày hết hiệu lực",
        },
        {
          dataField: "SDT",
          caption: "Số điện thoại",
        },
        {
          dataField: "GhiChu",
          caption: "Ghi chú",
        },
      ],
      openConfirmBox : false,
      mode: "view",
      selectedValue: null,
      dataGridOptions: {
        showRowLines: true,
        showBorders: true,
        showColumnHeaders: true,
        showColumnLines: true,
        allowColumnReordering: true,
        searchPanel: {
          searchVisibleColumnsOnly: true,
        },
      },
    };
  }

  componentDidMount(){
    this.loadGrid();
  }
  get gridInstance() {
    return this.gridRef.instance;
  }

  handleSearch = (text) => {
    console.log("text search : ", text);
    this.gridInstance.searchByText(text);
  };
  confirmOk = () => {
    alert("ok");
  };
  confirmCancel = () => {
    alert("cancel");
  };

  handleDelete = () => {
    const { Id } =  this.state.selectedValue || {};
    this.setState({
        mode: 'delete',
    })
    this.setState({
        openConfirmBox: true
    })
  }

  loadGrid = () => {
      KienNghiKiemToanService.getAll();
  }

  render() {
    const { columnsOptions, dataGridOptions } = this.state;
    return (
      <>
        <AppControl 
            onSearch={this.handleSearch}
            onDelete={this.handleDelete}
        >
          <div className="app">
            <DataGrid
              ref={(ref) => (this.gridRef = ref)}
              {...dataGridOptions}
              columns={columnsOptions}
              dataSource={this.state.dataSource}
              keyExpr="Id"
              selection={{ mode: "single" }}
              width={"100%"}
              onSelectionChanged={(e) => {
                this.setState({ selectedValue: e.selectedRowsData[0] });
              }}
            >
              <MasterDetail enabled={true} component={KienNghiDetail} />
              <Pager allowedPageSizes={[10]} showPageSizeSelector={true} />
              <Paging defaultPageSize={10} />
              <Confirm
                visible={this.state.openConfirmBox}
                width={300}
                height={200}
                onOk={this.confirmOk}
                onCancel={this.confirmCancel}
              ></Confirm>
            </DataGrid>
            <KienNghiMasterPopup show={this.state.mode !== 'view' && this.state.mode !== 'delete'}>
              <h1>Hello moi nguoi</h1>
            </KienNghiMasterPopup>
          </div>
        </AppControl>
        
      </>
    );
  }
}

class KienNghiDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          Id: 1,
          Ten: "Ten",
          Tuoi: "Tuoi",
          Sau: "Sau",
        },
      ],
      selectedTab: 1,
    };
    console.log(this.props);
  }
  gridTaiChinh = () => {
    return <DataGrid dataSource={this.state.dataSource} />;
  };
  girdDieuHanh = () => {
    return <DataGrid dataSource={this.state.dataSource} />;
  };
  handleTabsChange = (key) => {
    this.setState({ selectedTab: key });
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <Tabs
          selectedTabsChanged={this.handleTabsChange}
          selectedTab={this.state.selectedTab}
          dataSource={[
            {
              key: 1,
              title: "Kiến nghị",
              component: () => this.gridTaiChinh(),
            },
            {
              key: 2,
              title: "Điều hành",
              component: () => this.girdDieuHanh(),
            },
          ]}
        />
      </div>
    );
  }
}


class KienNghiMasterPopup extends Component {
    render() {
        return (
            <div>
                <Popup 
                    visible={this.props.show}
                >
                    {this.props.children || null}
                </Popup>
            </div>
        )
    }
}
