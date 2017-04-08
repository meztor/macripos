<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Producto extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		header('Content-type: application/json');
        header('Access-Control-Allow-Origin: *');

	}

	// List all your items
	public function index( $offset = 0 )
	{
		$this->load->model('producto_model', 'pm');
		$data = $this->pm->get();
		$this->output->set_content_type('application/json')->set_output(json_encode($data));

	}

	// Add a new item
	public function add()
	{

	}

	//Update one item
	public function update( $id = NULL )
	{

	}

	//Delete one item
	public function delete( $id = NULL )
	{

	}
}

/* End of file Producto.php */
/* Location: ./application/controllers/Producto.php */
