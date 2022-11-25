package edu.ssafy.repository;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import edu.ssafy.dto.BookmarkDto;
import edu.ssafy.dto.TourDto;

@Mapper
public interface MapMapper {

	int insertBookmark(BookmarkDto bookmark) throws IOException, SQLException;
	List<BookmarkDto> bookmarklist(String id) throws IOException, SQLException;
	int deleteBookmark(String bookmarkNo) throws IOException, SQLException;
	List<TourDto> travelmappart(String name) throws IOException, SQLException;
	List<String> getGugun() throws IOException, SQLException;
	List<TourDto> travelmaplist(String areaName) throws IOException, SQLException;
}
