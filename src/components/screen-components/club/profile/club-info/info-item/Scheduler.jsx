import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ButtonText from '../../../../../common-components/buttons/button-text/ButtonText';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';

const Col = styled(ColumnWrapper)`
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

// const Field = styled.input`
//   border: 1px solid ${BORDER_COLOR};
//   width: 70px;
//   outline: none;
//   color: #404040;
//   font-size: 12px;
//   padding: 10px 5px;
//   margin-right: 25px;
//   transition: 0.2s ease-in-out all;
//   @media (max-width: 768px) {
//     margin-right: 0;
//   }
//   @media (max-width: 500px) {
//     width: 30px;
//     margin-right: 0;
//   }
//   &:last-child {
//     margin-right: 0;
//   }
//   &:focus {
//     border-color: ${MAIN_THEME_COLOR};
//   }
// `;

// const SchedulerWrapper = styled(RowWrapper)`
//   align-items: center;
//   @media (max-width: 768px) {
//     justify-content: space-between;
//   }
// `;

const ColumnContainer = styled(RowWrapper)`
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Scheduler = ({ schedules, onSchedule }) => {
  // const isFormValid = () => {
  //   const { start, end, day, freq } = formik.values;
  //   return start && end && day && freq;
  // };

  // const addItemToList = () => {
  //   const { start, end, day, freq } = formik.values;
  //   if (isFormValid()) {
  //     setList([...list, { start, end, day, freq }]);
  //   }
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     start: '',
  //     end: '',
  //     day: '',
  //     freq: '',
  //   },
  //   onSubmit: () => {
  //     addItemToList();
  //     formik.handleReset();
  //   },
  // });

  return (
    <ColumnWrapper>
      <ColumnContainer>
        <Col>
          <Text14>Start</Text14>
          {schedules.map(({ start }, i) => (
            <Text14 key={`item${i}`} bold>
              {start}
            </Text14>
          ))}
        </Col>
        <Col>
          <Text14>End</Text14>
          {schedules.map(({ end }, i) => (
            <Text14 key={`item${i}`} bold>
              {end}
            </Text14>
          ))}
        </Col>
        <Col>
          <Text14>Day</Text14>
          {schedules.map(({ day }, i) => (
            <Text14 key={`item${i}`} bold>
              {day}
            </Text14>
          ))}
        </Col>
        <Col>
          <Text14>Frequency</Text14>
          {schedules.map(({ freq }, i) => (
            <Text14 key={`item${i}`} bold>
              {freq}
            </Text14>
          ))}
        </Col>
      </ColumnContainer>
      {/* <SchedulerWrapper style={{ marginTop: 10 }}>
        <Field name="start" onChange={formik.handleChange} value={formik.values.start} />
        <Field name="end" onChange={formik.handleChange} value={formik.values.end} />
        <Field name="day" onChange={formik.handleChange} value={formik.values.day} />
        <Field name="freq" onChange={formik.handleChange} value={formik.values.freq} />
      </SchedulerWrapper> */}
      {onSchedule ? (
        <ButtonText onClick={onSchedule} style={{ alignSelf: 'flex-end', marginTop: 10 }}>
          + Additional Schedule
        </ButtonText>
      ) : null}
    </ColumnWrapper>
  );
};

Scheduler.propTypes = {
  // icon: PropTypes.string.isRequired,
  // label: PropTypes.string,
  // text: PropTypes.string,
  // isLabelBold: PropTypes.bool,
  // children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  schedules: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.objectOf(PropTypes.string), PropTypes.string]),
  ),
  onSchedule: PropTypes.func.isRequired,
};

Scheduler.defaultProps = {
  // icon: '',
  // label: '',
  // text: '',
  // isLabelBold: false,
  // children: null,
  schedules: [],
};

export default Scheduler;
