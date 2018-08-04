import { Link } from "react-router-dom";
import React from 'react';
import PropTypes from 'prop-types';
import { getAllSeries } from '../actions/seriesActions';
import { connect } from 'react-redux';
import { Container, ListGroupItem, Table } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class Series extends React.Component {

    componentDidMount() {
        this.props.getAllSeries();
    }

    render() {
        const { series } = this.props.series;

        return (
            <div>
                <TransitionGroup className="series-list">
                    <CSSTransition timeout={500} classNames="fade">
                        <ListGroupItem className="listgroupitem">
                            <Container>
                                <Table>
                                    <tbody>
                                        {series.map(({ _id, url, desc, vidFile }) => (
                                            <tr key={_id}>
                                                <td style={{
                                                    width: '25%',
                                                    height: '25%'
                                                }} >
                                                    <Link name="link" to={`/series/video/${vidFile}`}>
                                                        <img src={url} alt="Description goes here"></img>
                                                    </Link>
                                                </td>
                                                <td style={{ color: 'white', verticalAlign: 'middle', textAlign: 'center' }}>
                                                    {desc}
                                                        </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Container>
                        </ListGroupItem>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
};

Series.propTypes = {
    getAllSeries: PropTypes.func.isRequired,
    series: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    series: state.series
})
export default connect(mapStateToProps, { getAllSeries })(Series);

