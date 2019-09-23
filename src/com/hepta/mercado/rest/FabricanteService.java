package com.hepta.mercado.rest;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.hepta.mercado.entity.Fabricante;
import com.hepta.mercado.entity.Produto;
import com.hepta.mercado.persistence.FabricanteDAO;

@Path("/fabricantes")
public class FabricanteService {
	@Context
	private HttpServletRequest request;

	@Context
	private HttpServletResponse response;
	
	private FabricanteDAO dao;
	
	public FabricanteService() {
		dao = new FabricanteDAO();
	}
	
	protected void setRequest(HttpServletRequest request) {
		this.request = request;
	}
	
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	@GET
	public Response produtoRead() {
		List<Fabricante> fabricantes = new ArrayList<>();
		try {
			fabricantes = dao.getAll();
		} catch(Exception e) {
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity("Erro ao buscar produtos").build();
		}
		
		GenericEntity<List<Fabricante>> entity = new GenericEntity<List<Fabricante>>(fabricantes) {};
		System.out.println(Response.status(Status.OK).entity(entity).build());
		return Response.status(Status.OK).entity(entity).build();
	}

}
