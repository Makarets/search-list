import React from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

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
                <button onClick={() => this.sort('name')} className='fa fa-sort-alpha-asc'><span>Sort name</span></button>
                <button onClick={() => this.sort('age')} className='fa fa-sort-numeric-desc'><span>Sort age</span></button>
            </div>
        )
    }

}

export default ToolBar;