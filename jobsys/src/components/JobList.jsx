import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { JobListManagebtn } from "./JobListManagebtn";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

export const JobList = () => {
  const [jobsArr, setJobsArr] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios("http://localhost:8083/jobs");
      setJobsArr(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Client</th>
            <th>Address</th>
            <th>Due Date</th>
            <th>Time</th>
            <th>Service</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {jobsArr.map((job) => {
            return (
              <>
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.client}</td>
                  <td>{job.address}</td>
                  <td>{job.dueDate}</td>
                  <td>{job.time}</td>
                  <td>
                    {job.services.map((service) => (
                      <Badge key={service.id} bg="primary">
                        {service.serviceType}
                      </Badge>
                    ))}
                  </td>
                  <td>
                    <Badge bg="success">Completed</Badge>
                  </td>
                  <td>
                    <JobListManagebtn
                      jobId={job.id}
                      client={job.client}
                      address={job.address}
                      date={job.dueDate}
                      time={job.time}
                      service={job.services}
                      notes={job.notes}
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
