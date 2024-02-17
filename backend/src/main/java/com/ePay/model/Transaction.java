package com.ePay.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer transactionId;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer bankTransactionId;
	private String transactionType;
	private LocalDateTime transactionDate;
	private Long amount;
	private String description;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "walletId")
	private Wallet wallet;

}
