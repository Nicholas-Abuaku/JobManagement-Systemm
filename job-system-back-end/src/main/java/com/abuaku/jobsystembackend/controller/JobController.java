package com.abuaku.jobsystembackend.controller;

import com.abuaku.jobsystembackend.model.Job;
import com.abuaku.jobsystembackend.service.JobService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @CrossOrigin

    @GetMapping("/jobs")
    public List<Job> findAllJobs(){
        return jobService.findAllJobs();
    }

    @GetMapping("/jobs/{id}")
    public Optional<Job> findJobById(@PathVariable("id")Long id){

        return jobService.findById(id);
    }

    @PostMapping("/jobs/new")
    public Job saveJob(@RequestBody Job job){

        return jobService.saveJob(job);
    }

    @PutMapping
    public Job updateJob(@RequestBody Job job){

        return jobService.updateJob(job);
    }
    @CrossOrigin
    @DeleteMapping("/jobs/delete/{id}")
    public void deleteJob(@PathVariable("id")Long id){

         jobService.deleteJob(id);
    }
}
