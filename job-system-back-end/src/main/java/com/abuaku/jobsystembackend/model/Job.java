package com.abuaku.jobsystembackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "jobs")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "client")
    private String client;
    @Column(name = "address")
    private String address;
    @Column(name = "due_date")
    private LocalDate dueDate;
    @Column(name = "time")
    private LocalTime time;

    @Column(name = "notes")
    private String notes;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_job_id", referencedColumnName = "id")
    private List<Services> services;

}
