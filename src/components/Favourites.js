import React, { Component } from 'react'
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) =>
      dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: id }),
  });
class Favourites extends Component {
    render() {
        const favs = this.props.favourites.job.map((jobId) => (
            this.props.job.find((job) => job.id === jobId)
        ));
        console.log(favs)
        return (
            <div>
                <h1>{this.props.job.company}</h1>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Favourites)
