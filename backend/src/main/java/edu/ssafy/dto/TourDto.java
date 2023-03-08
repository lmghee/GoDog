package edu.ssafy.dto;

public class TourDto {
	
	private int contentSeq;
	private String accode;
	private String areaName;
	private String pccode;
	private String partName;
	private String title;
	private String address;
	private String latitude;
	private String longitude;
	private String tel;
	
	public TourDto(int contentSeq, String accode, String areaName, String pccode, String partName, String title,
			String address, String latitude, String longitude, String tel) {
		super();
		this.contentSeq = contentSeq;
		this.accode = accode;
		this.areaName = areaName;
		this.pccode = pccode;
		this.partName = partName;
		this.title = title;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.tel = tel;
	}

	public int getContentSeq() {
		return contentSeq;
	}

	public void setContentSeq(int contentSeq) {
		this.contentSeq = contentSeq;
	}

	public String getAccode() {
		return accode;
	}

	public void setAccode(String accode) {
		this.accode = accode;
	}

	public String getAreaName() {
		return areaName;
	}

	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}

	public String getPccode() {
		return pccode;
	}

	public void setPccode(String pccode) {
		this.pccode = pccode;
	}

	public String getPartName() {
		return partName;
	}

	public void setPartName(String partName) {
		this.partName = partName;
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

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	@Override
	public String toString() {
		return "TourDto [contentSeq=" + contentSeq + ", accode=" + accode + ", areaName=" + areaName + ", pccode="
				+ pccode + ", partName=" + partName + ", title=" + title + ", address=" + address + ", latitude="
				+ latitude + ", longitude=" + longitude + ", tel=" + tel + "]";
	}
	
}
