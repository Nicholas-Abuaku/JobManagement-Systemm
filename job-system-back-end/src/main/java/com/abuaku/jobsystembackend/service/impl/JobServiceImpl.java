package com.abuaku.jobsystembackend.service.impl;

import com.abuaku.jobsystembackend.model.Job;
import com.abuaku.jobsystembackend.repository.JobRepo;
import com.abuaku.jobsystembackend.service.JobService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService {

    private final JobRepo jobRepo;

    public JobServiceImpl(JobRepo jobRepo){
        this.jobRepo = jobRepo;
    }
    @Override
    public List<Job> findAllJobs() {
        return jobRepo.findAll();
    }

    @Override
    public Optional<Job> findById(Long id) {
        return jobRepo.findById(id);
    }

    @Override
    public Job saveJob(Job job) {
        return jobRepo.save(job);
    }

    @Override
    public Job updateJob(Job job) {
        return jobRepo.save(job);
    }

    @Override
    public void deleteJob(Long id) {
        jobRepo.deleteById(id);
    }
}
