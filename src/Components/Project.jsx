import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Hospital Management System",
    description: `Successfully transitioned the HMS project from a Node.js codebase to NestJS,
enhancing the structure, modularity, and maintainability of the backend services.
Designed and implemented relational database schemas in MySQL to support
HMS functionalities such as patient records, appointments, and billing.
Built interactive and user-friendly UI components using ReactJS, adhering to
best practices and design guidelines.
Implemented security best practices, including input validation, authentication,
and authorization mechanisms to protect sensitive data
.`,
  },
  {
    label: "Swagger Interation And Deployement",
    description:
      `Cloned and deployed Swagger source code on the company server, enabling
comprehensive API documentation and testing capabilities for development
teams.
Configured server environments and ensured seamless integration with existing
systems.
Created a secure and user-friendly login page for company team meets, utilizing
Swagger code to streamline access and improve security.
`,
  },
  {
    label: "Todo",
    description: `Developed a full-stack Todo application using ReactJS for the frontend, NestJS
for the backend, and MySQL for the database.
Implemented features such as task creation, editing, deletion, and real-time
updates to enhance user productivity.
Ensured seamless integration between frontend and backend, providing a
smooth and efficient user experience.`,
  },
];

export default function Projects() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        maxWidth: 300,
        marginLeft:"300px",
        marginTop:"30px"
      
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography sx={{ ml: 6, width: "500px", p: 3 }}>
                {step.description}
              </Typography>
              <Box sx={{ mb: 3 }}>
                <div  style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, textAlign: "center" }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1 }}>
            Start
          </Button>
        </Paper>
      )}
    </Box>
  );
}
