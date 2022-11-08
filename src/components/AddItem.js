import React from 'react'
class AddItem extends React.Component {
    state = {  } 
    constructor(props){
        super(props);
        this.state = {
            productName: "",
            productPrice: 0
        }
    }
    render() { 
        return (
            <form className="row mb-5" onSubmit={(e)=>{e.preventDefault(); this.props.addItem(this.state.productName,Number(this.state.productPrice));}}>
            <div className="mb-3 col-5">
              <label htmlFor="inputName" className="form-label">Product Name</label>
              <input type="text" className="form-control" id="inputName" aria-describedby="name" name="productName" 
              onChange={(e)=>{ this.setState({productName: e.currentTarget.value}) } } 
              value = {this.state.productName}/>
            </div>
            <div className="mb-3 col-5">
              <label htmlFor="inputPrice" className="form-label">Price</label>
              <input type="number" className="form-control" id="inputPrice" name="productPrice"
                onChange={(e)=>{ this.setState({productPrice: e.currentTarget.value}) } }
                value = {this.state.productPrice}/>
            </div>
            <button type="submit" className="btn btn-outline-primary col-2">Add</button>
            {/* We use this keyword with class and state components but not with functional components */}
          </form>
          );
    }
}
 
export default AddItem;