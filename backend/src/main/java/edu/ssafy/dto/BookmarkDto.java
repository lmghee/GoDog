package edu.ssafy.dto;

public class BookmarkDto {

	private String bookmark_no;
	private String id;
	private String contentSeq;
	private String title;
	private String address;
	private String tel;
	
	public BookmarkDto() {}

	public BookmarkDto(String bookmark_no, String id, String contentSeq, String title, String address, String tel) {
		super();
		this.bookmark_no = bookmark_no;
		this.id = id;
		this.contentSeq = contentSeq;
		this.title = title;
		this.address = address;
		this.tel = tel;
	}

	public String getBookmark_no() {
		return bookmark_no;
	}

	public void setBookmark_no(String bookmark_no) {
		this.bookmark_no = bookmark_no;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getContentSeq() {
		return contentSeq;
	}

	public void setContentSeq(String contentSeq) {
		this.contentSeq = contentSeq;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	@Override
	public String toString() {
		return "BookmarkDto [bookmark_no=" + bookmark_no + ", id=" + id + ", contentSeq=" + contentSeq + ", title="
				+ title + ", address=" + address + ", tel=" + tel + "]";
	};
}
