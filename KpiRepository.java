package com.example.vue.demo.repository;

import javax.transaction.Transactional;

import com.example.vue.demo.entities.Kpi;

import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
@org.springframework.transaction.annotation.Transactional
public interface KpiRepository extends JpaRepository<Kpi,String>{
    Long deleteByName(String name);
}
