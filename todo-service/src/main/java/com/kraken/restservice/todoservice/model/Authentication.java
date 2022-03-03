package com.kraken.restservice.todoservice.model;

public class Authentication {

	private String messgae;

	public String getMessgae() {
		return messgae;
	}

	public void setMessgae(String messgae) {
		this.messgae = messgae;
	}

	public Authentication(String messgae) {
		super();
		this.messgae = messgae;
	}

	public Authentication() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Authentication [messgae=" + messgae + "]";
	}

}
