package com.abuaku.jobsystembackend.repository;

import com.abuaku.jobsystembackend.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepo extends JpaRepository<Job,Long> {

}
