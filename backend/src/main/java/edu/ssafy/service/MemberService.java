package edu.ssafy.service;

import edu.ssafy.dto.MemberDto;

public interface MemberService {

	int idCheck(String userId) throws Exception; // 아이디 중복검사
	void joinMember(MemberDto memberDto) throws Exception; // 회원가입
	MemberDto loginMember(MemberDto memberDto) throws Exception; // 로그인
	int deleteMember(String id) throws Exception;
	int updateMember(MemberDto memberDto) throws Exception;

	public MemberDto userInfo(String userId) throws Exception;
	public void saveRefreshToken(String userid, String refreshToken) throws Exception;
	public Object getRefreshToken(String userid) throws Exception;
	public void deleRefreshToken(String userid) throws Exception;
}
