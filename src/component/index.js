import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"; 
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection"; 
export const Index = () => {
    let [rowData, setRowData] = useState([])
    let programsFunc = async () => {
        let response = await axios.get('http://localhost:4000/programs/')
        setRowData(response.data)
        rowData.map(data => {
            console.log(data.name)
           
        })
    }


    useEffect(() => {
        programsFunc();
        
      }, []);
    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            {rowData!= "" &&
                <AgGridReact
                    rowData={rowData}>
                    <AgGridColumn field="name"></AgGridColumn>
                    <AgGridColumn field="status"></AgGridColumn>
                    <AgGridColumn field="actions"></AgGridColumn>
                    
                </AgGridReact>
            }
        </div>
    )
}


// "use strict";
// import "./styles.css";

// import React, { Component } from "react";
// import { render } from "react-dom";
// import { AgGridReact } from "@ag-grid-community/react";
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
// import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
// import "@ag-grid-community/core/dist/styles/ag-grid.css";
// import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

// function actionCellRenderer(params) {
//   let eGui = document.createElement("div");

//   let editingCells = params.api.getEditingCells();
//   // checks if the rowIndex matches in at least one of the editing cells
//   let isCurrentRowEditing = editingCells.some((cell) => {
//     return cell.rowIndex === params.node.rowIndex;
//   });

//   if (isCurrentRowEditing) {
//     eGui.innerHTML = `
// <button  class="action-button update"  data-action="update"> update  </button>
// <button  class="action-button cancel"  data-action="cancel" > cancel </button>
// `;
//   } else {
//     eGui.innerHTML = `
// <button class="action-button edit"  data-action="edit" > edit  </button>
// <button class="action-button delete" data-action="delete" > delete </button>
// `;
//   }

//   return eGui;
// }

// export default class GridExample extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       modules: [ClientSideRowModelModule, RangeSelectionModule],
//       columnDefs: [
//         { field: "athlete", minWidth: 150 },
//         { field: "age", maxWidth: 90 },
//         {
//           headerName: "action",
//           minWidth: 150,
//           cellRenderer: actionCellRenderer,
//           editable: false,
//           colId: "action"
//         }
//       ],
//       defaultColDef: {
//         editable: true
//       },
//       rowData: null
//     };
//   }

//   onGridReady = (params) => {
//     this.gridApi = params.api;
//     this.gridColumnApi = params.columnApi;

//     const httpRequest = new XMLHttpRequest();
//     const updateData = (data) => {
//       this.setState({ rowData: data });
//     };

//     httpRequest.open("GET", "https://www.ag-grid.com/example-assets/olympic-winners.json");
//     httpRequest.send();
//     httpRequest.onreadystatechange = () => {
//       if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//         updateData(JSON.parse(httpRequest.responseText));
//       }
//     };
//   };

//   onCellClicked(params) {
//     // Handle click event for action cells
//     if (params.column.colId === "action" && params.event.target.dataset.action) {
//       let action = params.event.target.dataset.action;

//       if (action === "edit") {
//         params.api.startEditingCell({
//           rowIndex: params.node.rowIndex,
//           // gets the first columnKey
//           colKey: params.columnApi.getDisplayedCenterColumns()[0].colId
//         });
//       }

//       if (action === "delete") {
//         params.api.applyTransaction({
//           remove: [params.node.data]
//         });
//       }

//       if (action === "update") {
//         params.api.stopEditing(false);
//       }

//       if (action === "cancel") {
//         params.api.stopEditing(true);
//       }
//     }
//   }

//   onRowEditingStarted(params) {
//     params.api.refreshCells({
//       columns: ["action"],
//       rowNodes: [params.node],
//       force: true
//     });
//   }
//   onRowEditingStopped(params) {
//     params.api.refreshCells({
//       columns: ["action"],
//       rowNodes: [params.node],
//       force: true
//     });
//   }

//   render() {
//     return (
//       <div style={{ width: "100%", height: "100%" }}>
//         <div
//           id="myGrid"
//           style={{
//             height: "600px",
//             width: "100%"
//           }}
//           className="ag-theme-alpine"
//         >
//           <AgGridReact
//             onRowEditingStopped={this.onRowEditingStopped}
//             onRowEditingStarted={this.onRowEditingStarted}
//             onCellClicked={this.onCellClicked}
//             editType="fullRow"
//             suppressClickEdit={true}
//             modules={this.state.modules}
//             columnDefs={this.state.columnDefs}
//             defaultColDef={this.state.defaultColDef}
//             enableRangeSelection={true}
//             onGridReady={this.onGridReady}
//             rowData={this.state.rowData}
//           />
//         </div>
//       </div>
//     );
//   }
// }
