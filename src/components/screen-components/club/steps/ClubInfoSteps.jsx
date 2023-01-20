import React, { useState, Fragment } from 'react';
import UserIcon from './icons/UserIcon';
import StepItem from './StepItem';
import PinIcon from './icons/PinIcon';
import CalendarIcon from './icons/CalendarIcon';
import DocIcon from './icons/DocIcon';
import CardIcon from './icons/CardIcon';
import ClubInformation from './club-information/ClubInformation';
import ClubLocation from './club-location/ClubLocation';
import { StepsWrapper } from './ClubCommonComponents';
import ClubSchedule from './club-schedule/ClubSchedule';
import ClubDetails from './club-details/ClubDetails';
import ClubPayments from './club-payments/ClubPayments';

const returnClubInformation = (f) => <ClubInformation functions={f} />;
const returnLocation = (f) => <ClubLocation functions={f} />;
const returnSchedule = (f) => <ClubSchedule functions={f} />;
const returnDetails = (f) => <ClubDetails functions={f} />;
const returnPayments = (f) => <ClubPayments functions={f} />;

const ClubInfoSteps = () => {
  const [currentStep, setCurrentStep] = useState({ index: 1 });
  const stepsList = [
    {
      index: 1,
      header: 'Step one',
      text: 'User information',
      active: currentStep.index === 1,
      icon: <UserIcon active={currentStep.index === 1} />,
      component: (f) => returnClubInformation(f),
    },
    {
      index: 2,
      header: 'Step two',
      text: 'Location',
      active: currentStep.index === 2,
      icon: <PinIcon active={currentStep.index === 2} />,
      component: (f) => returnLocation(f),
    },
    {
      index: 3,
      header: 'Step three',
      text: 'Schedule',
      active: currentStep.index === 3,
      icon: <CalendarIcon active={currentStep.index === 3} />,
      component: (f) => returnSchedule(f),
    },
    {
      index: 4,
      header: 'Step four',
      text: 'Details',
      active: currentStep.index === 4,
      icon: <DocIcon active={currentStep.index === 4} />,
      component: (f) => returnDetails(f),
    },
    {
      index: 5,
      header: 'Step five',
      text: 'Payments',
      active: currentStep.index === 5,
      icon: <CardIcon active={currentStep.index === 5} />,
      component: (f) => returnPayments(f),
    },
  ];

  const handleNextStep = () => {
    if (currentStep.index + 1 <= stepsList.length)
      setCurrentStep(stepsList.find((step) => step.index === currentStep.index + 1));
  };

  const handlePreviousStep = () => {
    if (currentStep.index - 1 >= stepsList[0].index)
      setCurrentStep(stepsList.find((step) => step.index === currentStep.index - 1));
  };

  return (
    <>
      <StepsWrapper>
        {stepsList.map((step, i) => (
          <StepItem
            key={step.header}
            header={step.header}
            text={step.text}
            active={step.active}
            icon={step.icon}
            divider={i !== stepsList.length - 1}
          />
        ))}
      </StepsWrapper>
      {stepsList.map((step) => (
        <Fragment key={step.index}>
          {step.active ? (
            <StepsWrapper>{step.component({ handlePreviousStep, handleNextStep })}</StepsWrapper>
          ) : null}
        </Fragment>
      ))}
    </>
  );
};

export default ClubInfoSteps;
