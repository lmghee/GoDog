package edu.ssafy.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import edu.ssafy.dto.BookmarkDto;
import edu.ssafy.dto.MemberDto;
import edu.ssafy.dto.TourDto;
import edu.ssafy.service.MapService;
import edu.ssafy.service.MapServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@CrossOrigin
@RequestMapping("/map")
@Api("Map 컨트롤러  API V1")
public class MapController {
	
	private final Logger logger = LoggerFactory.getLogger(MapController.class);

	@Autowired
	@Qualifier("mapservicemapper")
	private MapService mapService;
	
	@ApiOperation(value = "관심 지역 목록", notes = "아이디를 기준으로 관심 지역 목록을 반환한다.", response = Map.class)
	@GetMapping("/bookmarklist/{id}")
	public Map<String, Object> bookmarklist(@PathVariable String id) throws Exception {
		logger.debug("bookmaer list search");
		
//		System.out.println(id);
		
		List<BookmarkDto> list = mapService.bookmarklist(id);
//		for(BookmarkDto b : list) System.out.println(b.toString());
		
		Map<String, Object> maplist = new HashMap<>();
		maplist.put("bookmarks", list);
	
		return maplist;
	}
	
	@ApiOperation(value = "관심 지역 추가", notes = "아이디와 관심 지역 번호를 기준으로 관심 지역을 등록한다.", response = ResponseEntity.class)
	@PostMapping("/insertbk")
	public ResponseEntity<?> insertbookmark(@RequestBody BookmarkDto bookmarkDto, HttpSession session) throws Exception {
		logger.debug("insert bookmark");

//		System.out.println(bookmarkDto.toString());
		
		if(mapService.insertbookmark(bookmarkDto) == 1) {
	    	return new ResponseEntity<String>("success", HttpStatus.OK);
	    } else {
	    	return new ResponseEntity<String>("fail", HttpStatus.OK);
	    }
	}
	
	@ApiOperation(value = "관심 지역 삭제", notes = "관심지역 목록 번호를 기준으로 관심 지역을 삭제한다.", response = ResponseEntity.class)
	@DeleteMapping("/deleteBookmark/{bookmarkno}")
	public ResponseEntity<?> deleteBookmark(@PathVariable("bookmarkno") String bookmarkno) throws Exception {
		logger.debug("bookmaerk delete");
	
//		System.out.println(bookmarkno);
		
		if(mapService.deleteBookmark(bookmarkno) == 1) {
	    	return new ResponseEntity<String>("success", HttpStatus.OK);
	    } else {
	    	return new ResponseEntity<String>("fail", HttpStatus.OK);
	    }
	}
	
	@ApiOperation(value = "시군 목록", notes = "강원도 시군 목록을 반환한다.", response = Map.class)
	@GetMapping("/gugun") 
	public Map<String, Object> gugunlist() throws Exception {
		logger.debug("get gugun list");
				
		Map<String, Object> gugunlist = new HashMap<>();
		
		List<String> list = mapService.getGugun();
//		for(String temp : list) System.out.println(temp);
		
		gugunlist.put("gugunlist", list);
	
		return gugunlist;
	}
	
	@ApiOperation(value = "관광지 전체 목록", notes = "전체 관광지 목록을 반환한다.", response = Map.class)
	@GetMapping("/travelmap") 
	public Map<String, Object> travelmaplistall() throws Exception {
		logger.debug("get all travelmap list");
				
		Map<String, Object> maplist = new HashMap<>();
		
		for(int i = 1; i <= 5; i++) {
			String name = "PC0" + i + "";
//			System.out.println(name);
			List<TourDto> list = mapService.travelmappart(name);
//			for(TourDto b : list) System.out.println(b.toString());
			maplist.put(name, list);
		}
		return maplist;
	}
	
	@ApiOperation(value = "시군구 별 관광지 목록", notes = "시군구를 기준으로 관광지 목록을 반환한다.", response = Map.class)
	@GetMapping("/travellist") 
	public Map<String, Object> travelmaplist(String areaName) throws Exception {
		logger.debug("get travelmap list");
//		System.out.println(areaName);
		
		List<TourDto> list = mapService.travelmaplist(areaName);
//		for(TourDto b : list) System.out.println(b.toString());
		
		Map<String, Object> maplist = new HashMap<>();
		maplist.put("regionlist", list);
				
		return maplist;
	}
}

