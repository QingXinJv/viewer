package com.example.viewer.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author demo
 * @since 2020-08-08
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("v_video_collection")
public class VideoCollection implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 视频集表
     */
    private String id;

    private String name;

    private String author;

    private String introduction;


}
