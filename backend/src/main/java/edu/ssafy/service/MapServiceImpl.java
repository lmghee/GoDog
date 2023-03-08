package edu.ssafy.service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.ssafy.dto.BookmarkDto;
import edu.ssafy.dto.TourDto;
import edu.ssafy.repository.MapMapper;

@Service("mapservicemapper")
public class MapServiceImpl implements MapService {
	
	private MapMapper mapmapper;
	
	@Autowired
	private MapServiceImpl(MapMapper mapmapper) {
		this.mapmapper = mapmapper;
	}

	@Override
	public int insertbookmark(BookmarkDto bookmark) throws IOException, SQLException {
		return mapmapper.insertBookmark(bookmark);
	}

	@Override
	public List<BookmarkDto> bookmarklist(String id) throws IOException, SQLException {
		return mapmapper.bookmarklist(id);
	}

	@Override
	public int deleteBookmark(String bookmarkNo) throws IOException, SQLException {
		return mapmapper.deleteBookmark(bookmarkNo);
	}

	@Override
	public List<TourDto> travelmappart(String name) throws IOException, SQLException {
		return mapmapper.travelmappart(name);
	}

	@Override
	public List<String> getGugun() throws IOException, SQLException {
		return mapmapper.getGugun();
	}

	@Override
	public List<TourDto> travelmaplist(String areaName) throws IOException, SQLException {
		return mapmapper.travelmaplist(areaName);
	}

}
