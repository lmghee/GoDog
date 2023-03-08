package edu.ssafy.repository;

import java.util.*;
import java.sql.SQLException;

import org.apache.ibatis.annotations.Mapper;

import edu.ssafy.dto.MemberDto;

@Mapper
public interface MemberMapper {
	int idCheck(String userId) throws SQLException;
	void joinMember(MemberDto memberDto) throws SQLException;
	MemberDto loginMember(MemberDto memberDto) throws SQLException;
	int deleteMember(String id) throws SQLException;
	int updateMember(MemberDto memberDto) throws SQLException;

	public MemberDto userInfo(String userid) throws SQLException;
	public void saveRefreshToken(Map<String, String> map) throws SQLException;
	public Object getRefreshToken(String userid) throws SQLException;
	public void deleteRefreshToken(Map<String, String> map) throws SQLException;
}
