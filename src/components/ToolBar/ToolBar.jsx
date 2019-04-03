import React from 'react';

class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.sorted = { age: true, name: true };
    }

    sort = (type) => {
        const { update, data } = this.props;
        const isSorted = this.sorted[type];
        let direction = isSorted ? 1 : -1;

        const sorted = [].slice.call(data).sort((a,b) => {
          if (a[type] === b[type]) { return 0;}
          return a[type] > b[type] ? direction : direction * -1;
        })

        this.sorted[type] = !isSorted;

        update({
            data: sorted,
            active: 0
        })
    }



    render() {
        return(
            <div>
                <button>Sort age</button>
                <button onClick={() => this.sort('name')}>Sort name</button>
            </div>
        )
    }

}

export default ToolBar;