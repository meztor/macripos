
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Producto_model extends CI_Model {

	public function get(){
		$query = $this->db->order_by('producto_nombre')->get('producto');
		return $query->result();
	}	

}

/* End of file tutoriales.php */
/* Location: ./application/models/tutoriales.php */

/* End of file tutoriales.php */
/* Location: ./application/models/tutoriales.php */