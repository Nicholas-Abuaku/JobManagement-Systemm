package com.abuaku.jobsystembackend.service;

import com.abuaku.jobsystembackend.model.Job;

import java.util.List;
import java.util.Optional;

public interface JobService {
    List<Job> findAllJobs();

    Optional<Job> findById(Long id);

    Job saveJob(Job job);

    Job updateJob(Job job);

    void deleteJob(Long id);
}
