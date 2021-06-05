import React from 'react'

const Example = (props) => {
    return (
        <div style={{ marginBottom: 80 }}>
          {/* <hr style={{ border: "2px solid #ddd" }} /> */}
          <div style={{ marginTop: 30, display: "flex" }}>
            <div style={{ width: "10%", paddingRight: 30 }}>{props.children}</div>
            <div style={{ width: "70%" }}>
              <h3 className="h5">{props.label}</h3>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      );
}

export default Example
